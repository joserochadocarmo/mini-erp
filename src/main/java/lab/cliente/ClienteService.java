package lab.cliente;

import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ClienteService {

	@Autowired
	private ClienteRepository clienteRepository;

	public Cliente registrarCliente(Cliente cliente) {
		cliente.setData(new Date());
		return clienteRepository.save(cliente);
	}

	public Cliente obterCliente(Integer codigo) {
		return clienteRepository.findOne(codigo);
	}

	public Iterable<Cliente> obterTodos() {
		return clienteRepository.findAll();
	}

	public void deletarCliente(Cliente cliente) {
		clienteRepository.delete(cliente);
	}
}
