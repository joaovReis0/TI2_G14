package service;

import static spark.Spark.*;
import dao.DAO;
import model.Comentario;
import model.Topico;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import spark.Request;
import spark.Response;

public class TopicoService {
	private DAO Dao;
	
	public TopicoService() {
		Dao = new DAO();
		Dao.conectar();
	}
	
	public Object add(Request request, Response response) throws ParseException {
		String titulo = request.queryParams("titulo");
		String assunto = request.queryParams("assunto");
		int votosTopico = 0;
		int nComentarios = 0;
		//int topicoID = ;
		int id = Dao.getMaxIdTopico() + 1;
		String dataTopico =  new SimpleDateFormat("dd-MM-yyyy").format(new Date());
		
 		Topico topico = new Comentario(id, nComentarios, titulo, votosTopico, dataTopico, assunto, usuarioID);
 		Dao.inserirTopico(topico);
 	
		return id;
		/*int idTopico, int nComentarios, String titulo, int votosTopico, String dataTopico, String assunto, int usuarioID) {
		this.idTopico = idTopico;
		this.nComentarios = nComentarios;
		this.titulo = titulo;
		this.votosTopico = votosTopico;
		this.dataTopico = dataTopico;
		this.assunto = assunto;
		this.usuarioID = usuarioID;
		*/
	}
	
}