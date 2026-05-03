using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TaskApi.Data;
using TaskApi.Models;

namespace TaskApi.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TarefasController : ControllerBase
    {
        private readonly AppDbContext _context;

        public TarefasController(AppDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Tarefa>>> Get()
        {
            return await _context.Tarefas.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Tarefa>> Post(Tarefa tarefa)
        {
            tarefa.DataCriacao = DateTime.Now;

            _context.Tarefas.Add(tarefa);
            await _context.SaveChangesAsync();

            return Ok(tarefa);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Tarefa tarefa)
        {
            if (id != tarefa.Id)
                return BadRequest();

            _context.Entry(tarefa).State = EntityState.Modified;

            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var tarefa = await _context.Tarefas.FindAsync(id);

            if (tarefa == null)
                return NotFound();

            _context.Tarefas.Remove(tarefa);

            await _context.SaveChangesAsync();

            return NoContent();
        }

        [HttpPatch("{id}/concluir")]
public async Task<IActionResult> Concluir(int id)
{
    var tarefa = await _context.Tarefas.FindAsync(id);

    if (tarefa == null)
        return NotFound();

    tarefa.Status = "Concluída";

    await _context.SaveChangesAsync();

    return NoContent();
}
    }


}