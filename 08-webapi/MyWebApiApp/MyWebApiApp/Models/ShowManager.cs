using System;
using System.Collections.Generic;
using System.Linq;

namespace MyWebApiApp.Models
{
    class ShowManager
    {
        static List<Show> shows = new List<Show>()
        {
            new Show() {Id=1, Name = "Game of thrones", Channel = "HBO", Time = new DateTime()},
            new Show() {Id=2, Name = "Suits", Channel = "USA", Time = new DateTime()},
            new Show() {Id=3, Name = "House of cards", Channel = "Netflix", Time = new DateTime()}
        };

        public List<Show> GetAllShows()
        {
            return shows;
        }

        public Show GetShow(int id)
        {
            return shows.FirstOrDefault(s => s.Id == id);
        }

        public void DeleteShow(int id)
        {
            shows.RemoveAll(s => s.Id == id);
        }

    }
}