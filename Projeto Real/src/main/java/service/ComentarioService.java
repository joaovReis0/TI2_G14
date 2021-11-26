package service;

import dao.DAO;
import static spark.Spark.*;
import model.Comentario;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;

import spark.Request;
import spark.Response;



public class ComentarioService {
	private DAO Dao;
	
	public ComentarioService() {
		Dao = new DAO();
		Dao.conectar();
	}
	
	public Object add(Request request, Response response) throws ParseException {
		String conteudo = request.queryParams("conteudo");
		int usuarioID = Integer.parseInt(request.queryParams("id"));
		int topicoID = Integer.parseInt(request.queryParams("topicoID"));
		int id = Dao.getMaxIdComentario() + 1;	
		int votosComentario = 0;
		String dataComentario =  new SimpleDateFormat("dd-MM-yyyy").format(new Date());
		
 		Comentario comentario = new Comentario(id, conteudo, votosComentario, dataComentario, usuarioID, topicoID);
 		Dao.inserirComentario(comentario);
 	
		return id;
		/*this.idComentario = -1;
		this.conteudo = conteudo;
		this.votosComentario = -1;
		this.dataComentario = dataComentario;
		this.usuarioID = usuarioID;
		this.topicoID = topicoID;
		
		public Comentario( int idComentario, String conteudo, int votosComentario, String dataComentario, int usuarioID, int topicoID) {
		*/
	}

}
