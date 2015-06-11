using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BankWebSite.Controllers
{
    [Authorize]
    public class BankAccountController : ApiController
    {
        public BankAccountInfo Get()
        {
            return new BankAccountInfo
            {
                Name = "Personal",
                Balance = 10000
            };
        }
        public void Post()
        {
            // transfer money to the Bahamas
        }
    }
}
