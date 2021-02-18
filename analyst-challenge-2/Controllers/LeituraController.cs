using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using analyst_challenge_2.Context;
using analyst_challenge_2.Dtos;
using analyst_challenge_2.Enums;
using analyst_challenge_2.Models;
using analyst_challenge_2.Service;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;

namespace analyst_challenge_2.Controllers
{
    [Route("Api/Leitura")]
    [ApiController]
    public class LeituraController : ControllerBase
    {
        private readonly LeituraService _leituraService;

        public LeituraController(SensoresContext sensoresContext)
        {
            _leituraService = new LeituraService(sensoresContext);
        }
        
        [HttpGet]
        public async Task<ActionResult<String>> Get()
        {
            try
            {
                return JsonConvert.SerializeObject(await _leituraService.GetLeituras());
            }            
            catch(Exception ex)
            {
                throw ex;
            }
        }

        [Route("Grafico")]
        [HttpGet]
        public async Task<ActionResult<String>> GetGrafico()
        {
            try
            {
                return JsonConvert.SerializeObject(await _leituraService.GetLeiturasGrafico());
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }

        [HttpPost]
        public async Task Add([FromBody] LeituraDto leituraDto)
        {
            try
            {
                await _leituraService.insertLeitura(leituraDto);                
            }
            catch(Exception ex)
            {
                throw ex;
            }
        }
    }
}
