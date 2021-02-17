using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace API.Entities
{
    public class Application
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string ApplyPosition { get; set; }
        public string AvailableStartDate { get; set; }
        public string CurrentEmploymentStatus { get; set; }
        public string Status { get; set; }

    }
}
