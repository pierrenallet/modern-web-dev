using System;
using System.Linq;
using System.Web;

namespace MyWebApiApp.Models
{
    public class Show
    {
        public string Name { get; set; }
        public string Channel { get; set; }
        public DateTime Time { get; set; }
        public int Id { get; set; }
    }
}