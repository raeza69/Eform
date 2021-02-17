using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using API.Data;
using API.Entities;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ApplicationController : ControllerBase
    {
        private readonly DataContext _context;
        public ApplicationController(DataContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Application>>> GetAllApplication()
        {
            return await _context.Applications.ToListAsync();
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Application>> GetApplication(int id)
        {
            return await _context.Applications.FindAsync(id);
        }

        [HttpPost]
        public async Task<ActionResult<int>> PostApplication([FromBody] Application application)
        {
            var result = await _context.Applications.AddAsync(application);
            _context.SaveChanges();
            return result.Entity.Id;
        }

        [HttpGet("[action]")]
        public async Task<ActionResult<DashboardModel>> GetApplicationDashboard()
        {
            DashboardModel result = new DashboardModel();
            result.Draft = _context.Applications.Where(x => x.Status == "draft").Count();
            result.Submit = _context.Applications.Where(x => x.Status == "submit").Count();
            result.Approve = _context.Applications.Where(x => x.Status == "approve").Count();
            result.Return = _context.Applications.Where(x => x.Status == "return").Count();
            return result;
        }

        [HttpPost("[action]")]
        public async Task<ActionResult<int>> UpdateApplication([FromBody] Application application)
        {
            var result = _context.Applications.Update(application);
            _context.SaveChanges();
            return result.Entity.Id;
        }


    }
    public class DashboardModel
    {
        public int Draft { get; set; }
        public int Submit { get; set; }
        public int Approve { get; set; }
        public int Return { get; set; }
    }
}