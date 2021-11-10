package service;

import static spark.Spark.*;
import dao.DAO;
import model.Usuario;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import spark.Request;
import spark.Response;

public class UsuarioService {
	private DAO Dao;
	
	public UsuarioService() {
		Dao = new DAO();
		Dao.conectar();
	}
	
	public Object add(Request request, Response response) throws ParseException {
		String nome = request.queryParams("nome");
		String emailUsuario = request.queryParams("emailusuario");
		String senhaUsuario = request.queryParams("senhausuario");
		String prefCurso = request.queryParams("prefCurso");
		String prefArea = request.queryParams("prefArea");
		int id = Dao.getMaxIdUsuario() + 1;
		
		return id;
	}

	public Object get(Request request, Response response) {
		int id = Integer.valueOf(request.queryParams("idusuario"));
		Usuario usuario = Dao.getUsuario(id);
		
		if (usuario != null) {
			response.header("Content-Type", "application/xml");
			response.header("Content-Encoding", "UTF-8");

			return "<usuario>\n" +
					"\t<idusuario>" + usuario.getIdUsuario() + "\t</idusuario>\n" +
					"\t<nome>" + usuario.getNome() + "\t</nome>\n" +
					"\t<emailUsuario>" + usuario.getEmailUsuario() + "\t</emailusuario>\n" +
					"\t<senhaUsuario>" + usuario.getSenhaUsuario() + "\t</senhausuario>\n" +
					"\t<prefcurso>" + usuario.getPrefCurso() + "\t</prefcurso>\n" +
					"\t<prefarea>" + usuario.getPrefArea() + "\t</prefarea>\n" +
					"</usuario>";
		} else {
			response.status(404);
			return "Produto nao encontrado";
		}
	}
	
	public Object getAll(Request request, Response response) {
		StringBuffer usuarios = new StringBuffer("<usuarios type=\"array\">");
		for (Usuario usuario : Dao.getUsuarios()) {
			usuarios.append(
					"<usuario>\n" +
					"\t<idusuario>" + usuario.getIdUsuario() + "\t</idusuario>\n" +
					"\t<nome>" + usuario.getNome() + "\t</nome>\n" +
					"\t<emailUsuario>" + usuario.getEmailUsuario() + "\t</emailusuario>\n" +
					"\t<senhaUsuario>" + usuario.getSenhaUsuario() + "\t</senhausuario>\n" +
					"\t<prefcurso>" + usuario.getPrefCurso() + "\t</prefcurso>\n" +
					"\t<prefarea>" + usuario.getPrefArea() + "\t</prefarea>\n" +
					"</usuario>"
			);
		}
		usuarios.append("</usuarios>");
		response.header("Content-Type", "application/xml");
		response.header("Content-Encoding", "UTF-8");
		return usuarios.toString();
	}
	
}