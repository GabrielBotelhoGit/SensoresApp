using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace analyst_challenge_2.Utils
{
    public class Util
    {
        public static DateTime UnixTimeStampToDateTime(long unixTimeStamp)
        {
            DateTime dtDateTime = new DateTime(1970, 1, 1, 0, 0, 0, 0, System.DateTimeKind.Utc);
            dtDateTime = dtDateTime.AddSeconds(unixTimeStamp).ToLocalTime();
            return dtDateTime;
        }
    }
}
