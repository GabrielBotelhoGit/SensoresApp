using analyst_challenge_2.Context;
using analyst_challenge_2.Dtos;
using analyst_challenge_2.Enums;
using analyst_challenge_2.Models;
using analyst_challenge_2.Utils;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace analyst_challenge_2.Service
{
    public class LeituraService
    {
        private SensoresContext _sensoresContext;
        public LeituraService(SensoresContext sensoresContext)
        {
            this._sensoresContext = sensoresContext;
        }

        public async Task<List<LeituraDto>> GetLeituras()
        {
            return await Task.Run(() =>
            {
                List<Leitura> leituras = new List<Leitura>();
                leituras = _sensoresContext.Leitura.ToList<Leitura>();
                List<LeituraDto> leiturasDto = getDtosFromEntitys(leituras);
                return leiturasDto;
            });            
        }

        public async Task<List<LeituraDto>> GetLeiturasGrafico()
        {
            return await Task.Run(() =>
            {
                List<Leitura> leituras = new List<Leitura>();

                String consulta = "SELECT t1.Codigo, t1.Status, t1.timestamp, t1.tag, t1.valor " +
                                    "FROM Leitura t1 " +
                                    "INNER JOIN( " +
                                        "SELECT tag, MAX(timestamp) timestamp " +
                                        "FROM Leitura " +
                                        "GROUP BY tag " +
                                    ") t2 " +
                                    "ON t1.tag = t2.tag AND t1.timestamp = t2.timestamp " +
                                    "where status = 0 ";
                leituras = _sensoresContext.Leitura.FromSqlRaw(consulta).ToList();
                List<LeituraDto> leiturasDto = getDtosFromEntitys(leituras);
                return leiturasDto;
            });
        }

        public async Task insertLeitura(LeituraDto leituraDto)
        {
            await Task.Run(() =>
            {
                Leitura leitura = getEntityFromDto(leituraDto);
                _sensoresContext.Leitura.Add(leitura);
                _sensoresContext.SaveChanges();
            });            
        }

        private Leitura getEntityFromDto(LeituraDto leituraDto)
        {
            Leitura leitura = new Leitura();
            DateTime dateTime = Util.UnixTimeStampToDateTime(leituraDto.timestamp);
            leitura.timeStamp = dateTime;
            leitura.tag = leituraDto.tag;
            leitura.valor = leituraDto.valor;
            int valorParseado = 0;
            bool isIntValue = int.TryParse(leituraDto.valor, out valorParseado);
            if (isIntValue)
            {
                leitura.status = Status.Processado;
            }
            else
            {
                leitura.status = Status.Erro;
            }            
            return leitura;
        }

        private LeituraDto getDtoFromEntity(Leitura leitura)
        {
            LeituraDto leituraDto = new LeituraDto();
            leituraDto.data = leitura.timeStamp.ToString("yyyy-MM-dd HH:mm");
            leituraDto.timestamp = ((DateTimeOffset)leitura.timeStamp).ToUnixTimeSeconds();
            leituraDto.tag = leitura.tag;
            leituraDto.status = Enum.GetName(typeof(Status), leitura.status);
            leituraDto.valor = leitura.valor;
            return leituraDto;
        }

        private List<LeituraDto> getDtosFromEntitys(List<Leitura> leituras)
        {
            List<LeituraDto> leiturasDto = new List<LeituraDto>();
            foreach(Leitura leitura in leituras)
            {
                leiturasDto.Add(getDtoFromEntity(leitura));
            }
            return leiturasDto;
        }        
    }
}
