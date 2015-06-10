using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Text;
using System.Threading.Tasks;
using Microsoft.Owin.FileSystems;
using Microsoft.Owin.Hosting;
using Microsoft.Owin.StaticFiles;
using Owin;

namespace MyFirstWebServer
{
    class Program
    {
        static void Main()
        {
            Console.WriteLine("Hello C#");
            using (WebApp.Start<Startup>("http://localhost:1234"))
            {
                Console.WriteLine("The server is running");
                Console.Read();
            }
        }
    }

    class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            app.Use(async (context, next) =>
            {
                Console.WriteLine("Before request");
                if (context.Request.Path.Value == "/hi")
                {
                    Console.WriteLine("in hi");
                    context.Response.Redirect("/hello");

                }
                else if (context.Request.Path.Value == "/hello")
                {
                    Console.WriteLine("in hello");
                    await context.Response.WriteAsync("<h1>hello</h1>");
                }
                else if (context.Request.Path.Value == "/hello.json")
                {
                    Console.WriteLine("in hello");
                    context.Response.Headers.Set("content-type", "application/json");
                    await context.Response.WriteAsync("{'message': 'hello'}");

                }
                else
                {
                    await next();
                }
                Console.WriteLine("after request");
            });
            app.UseStaticFiles(new StaticFileOptions()
            {
                FileSystem = new PhysicalFileSystem(@"C:\Users\pierr\Documents\modern-web-dev\07-SPA\public")
            });
            ///app.UseWelcomePage();
        }
    }
}
