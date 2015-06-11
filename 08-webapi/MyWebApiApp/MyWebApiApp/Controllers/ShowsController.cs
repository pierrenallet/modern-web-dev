using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using MyWebApiApp.Models;

namespace MyWebApiApp.Controllers
{
    
    [RoutePrefix("myapi/myshows")]
    public class ShowsController : ApiController
    {
        public ShowsController()
        {
            
        }
        ShowManager manager = new ShowManager();
        // GET api/shows
        [HttpGet]
        [Route("getmyshows")]
        public IEnumerable<Show> GatherAllShows()
        {
            return manager.GetAllShows();
        }

        // GET api/values/5
        [HttpGet]
        [Route("getmyshows/{id}")]
        public IHttpActionResult Get(int id)
        {
            /// return manager.GetShow(id);
            var show = manager.GetShow(id);
            if (show != null)
                return Ok(show);
            return NotFound();
        }

        // POST api/values
        public void Post([FromBody]string value)
        {

        }

        // PUT api/values/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/values/5
        public void Delete(int id)
        {
            manager.DeleteShow(id);
        }
    }
}
