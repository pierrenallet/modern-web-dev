using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(BankWebSite.Startup))]
namespace BankWebSite
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
