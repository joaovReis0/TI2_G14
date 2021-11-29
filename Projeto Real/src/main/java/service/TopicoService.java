package service;

import static spark.Spark.*;
import dao.DAO;
import model.Comentario;
import model.Topico;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import com.google.gson.Gson;
import com.google.gson.GsonBuilder;

import spark.Request;
import spark.Response;

public class TopicoService {
	private DAO Dao;
	
	public TopicoService() {
		Dao = new DAO();
		Dao.conectar();
	}

	public Object getAll(Request request, Response response) {
		/*
		StringBuffer topicos = new StringBuffer("<topicos type=\"array\">");
		for (Topico topico : Dao.getTopicos()) {
			topicos.append(
					"<topico>\n" +
					"\t<idTopico>" + topico.getIdTopico() + "\t</idTopico>\n" +
					"\t<assunto>" + topico.getAssunto() + "\t</assunto>\n" +
					"\t<dataTopico>" + topico.getDataTopico() + "\t</dataTopico>\n" +
					"\t<nComentario>" + topico.getNComentarios() + "\t</nComentario>\n" +
					"\t<titulo>" + topico.getTitulo() + "\t</titulo>\n" +
					"\t<usuarioID>" + topico.getUsuarioID() + "\t</usuarioID>\n" +
					"\t<votosTopico>" + topico.getVotosTopico() + "\t</votosTopico>\n" +
					"</topico>"
			);
		}*/
		GsonBuilder builder = new GsonBuilder();
        Gson gson = builder.create();
        System.out.println(gson.toJson(Dao.getTopicos()));
       
		//topicos.append("</topicos>");
        
		response.header("Content-Type", "application/json");
		response.header("Content-Encoding", "UTF-8");
		return gson.toJson(Dao.getTopicos());
	}
	
	public Object add(Request request, Response response) throws ParseException {
		String titulo = request.queryParams("titulo");
		String assunto = request.queryParams("assunto");
		int usuarioID = Integer.parseInt(request.queryParams("id"));
		int votosTopico = 0;
		int nComentarios = 0;
		int id = Dao.getMaxIdTopico() + 1;
		String dataTopico =  new SimpleDateFormat("dd-MM-yyyy").format(new Date());
		
 		Topico topico = new Topico(id, nComentarios, titulo, votosTopico, dataTopico, assunto, usuarioID);
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