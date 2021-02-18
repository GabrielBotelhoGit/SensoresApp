using analyst_challenge_2.Enums;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace analyst_challenge_2.Models
{
    public class Leitura
    {
        #region Atributos privados
        private int _Codigo;
        private Status _Status;
        private DateTime _TimeStamp;
        private string _Tag;
        private string _Valor;        
        #endregion            

        #region Atributos Publicos
        public int codigo { get { return this._Codigo; } set { this._Codigo = value; } }        
        public Status status { get { return this._Status; } set { this._Status = value; } }
        public DateTime timeStamp { get { return this._TimeStamp; } set { this._TimeStamp = value; } }
        public string tag { get { return this._Tag; } set { this._Tag = value; } }
        public string valor { get { return this._Valor; } set { this._Valor = value; } }        
        #endregion

        #region Metodos Públicos
                
        #endregion
    }
}
