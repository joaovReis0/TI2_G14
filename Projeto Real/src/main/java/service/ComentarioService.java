package service;

import dao.DAO;
import static spark.Spark.*;
import model.Comentario;
import model.Topico;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.time.LocalDate;
import java.util.Date;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

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
	
	public Object getAll(Request request, Response response) {
		/*
		StringBuffer comentarios = new StringBuffer("<comentarios type=\"array\">");
		for (Comentario comentario : Dao.getComentarios()) {
			comentarios.append(
					"<comentario>\n" +
					"\t<idComentario>" + comentario.getIdComentario() + "\t</idComentario>\n" +
					"\t<conteudo>" + comentario.getConteudo() + "\t</conteudo>\n" +
					"\t<dataComentario>" + comentario.getDataComentario() + "\t</dataComentario>\n" +
					"\t<topicoID>" + comentario.getTopicoID() + "\t</topicoID>\n" +
					"\t<usuarioID>" + comentario.getUsuarioID() + "\t</usuarioID>\n" +
					"\t<votosComentario>" + comentario.getVotosComentario() + "\t</votosComentario>\n" +
					"</comentario>"
			);
		}
		*/
		GsonBuilder builder = new GsonBuilder();
        Gson gson = builder.create();
        System.out.println(gson.toJson(Dao.getComentarios()));
        
		//comentarios.append("</comentarios>");
        
        response.header("Content-Type", "application/json");
		response.header("Content-Encoding", "UTF-8");
		return gson.toJson(Dao.getComentarios());
	}

}
