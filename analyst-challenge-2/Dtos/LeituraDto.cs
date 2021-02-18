using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace analyst_challenge_2.Dtos
{
    public class LeituraDto
    {
        public long timestamp { get; set; }
        public string data { get; set; }
        public string tag { get; set; }
        public string valor { get; set; }
        public string status { get; set; }
    }
}
