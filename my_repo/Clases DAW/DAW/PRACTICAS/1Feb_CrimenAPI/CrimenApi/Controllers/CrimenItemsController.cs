
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using CrimenApi.Models;

namespace CrimenApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CrimenItemsController : ControllerBase
    {
        private readonly CrimenContext _context;

        public CrimenItemsController(CrimenContext context)
        {
            _context = context;
        }

        // GET: api/CrimenItems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<CrimenItem>>> GetCrimenItems()
        {
            return await _context.CrimenItems.ToListAsync();
        }

        // GET: api/CrimenItems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<CrimenItem>> GetCrimenItem(long id)
        {
            var CrimenItem = await _context.CrimenItems.FindAsync(id);

            if (CrimenItem == null)
            {
                return NotFound();
            }

            return CrimenItem;
        }

        // PUT: api/CrimenItems/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCrimenItem(long id, CrimenItem CrimenItem)
        {
            if (id != CrimenItem.Id)
            {
                return BadRequest();
            }

            _context.Entry(CrimenItem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CrimenItemExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/CrimenItems
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<CrimenItem>> PostCrimenItem(List<CrimenItem> CrimenItem)
        {
            /*_context.CrimenItems.Add(CrimenItem);
            await _context.SaveChangesAsync();
            return CreatedAtAction("GetCrimenItem", new { id = CrimenItem.Id }, CrimenItem);*/

             foreach (CrimenItem item in CrimenItem)
            {
                _context.CrimenItems.Add(item);
            }
            await _context.SaveChangesAsync();

            CrimenItem xCrimenItem = CrimenItem[0];

            return CreatedAtAction("GetCrimenItem", new { id = CrimenItem[0].Id }, xCrimenItem);
       
        }

        // DELETE: api/CrimenItems/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<CrimenItem>> DeleteCrimenItem(long id)
        {
            var CrimenItem = await _context.CrimenItems.FindAsync(id);
            if (CrimenItem == null)
            {
                return NotFound();
            }

            _context.CrimenItems.Remove(CrimenItem);
            await _context.SaveChangesAsync();

            return CrimenItem;
        }

        private bool CrimenItemExists(long id)
        {
            return _context.CrimenItems.Any(e => e.Id == id);
        }
    }
}