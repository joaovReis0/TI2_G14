package model;

import java.sql.Date;
import org.json.JSONException;
import org.json.JSONObject;
import dao.DAO;

public class Topico {
	
	private int idTopico;
	private int nComentarios;
	private String titulo;
	private int votosTopico;
	private String dataTopico;
	private String assunto;
	private int usuarioID;
	
	public Topico() {
		this.idTopico = -1;
		this.nComentarios = -1;
		this.titulo = titulo;
		this.votosTopico = -1;
		this.dataTopico = dataTopico;
		this.assunto = assunto;
		this.usuarioID = usuarioID;
	}
	
	public Topico( int idTopico, int nComentarios, String titulo, int votosTopico, String dataTopico, String assunto, int usuarioID) {
		this.idTopico = idTopico;
		this.nComentarios = nComentarios;
		this.titulo = titulo;
		this.votosTopico = votosTopico;
		this.dataTopico = dataTopico;
		this.assunto = assunto;
		this.usuarioID = usuarioID;
	}
	
	public int getIdTopico() {
		return idTopico;
	}
	
	public void setIdTopico(int idTopico) {
		this.idTopico = idTopico;
	}
	
	public int getNComentarios() {
		return nComentarios;
	}
	
	public void setNComentarios(int nComentarios) {
		this.nComentarios = nComentarios;
	}
	
	public String getTitulo() {
		return titulo;
	}
	
	public void setTitulo(String titulo) {
		this.titulo = titulo;
	}
	
	public int getVotosTopico() {
		return votosTopico;
	}
	
	public void setVotosTopico(int votosTopico) {
		this.votosTopico = votosTopico;
	}
	
	public String getDataTopico() {
		return dataTopico;
	}
	
	public void setDataTopico(String dataTopico) {
		this.dataTopico = dataTopico;
	}
	
	public String getAssunto() {
		return assunto;
	}
	
	public void setAssunto(String assunto) {
		this.assunto = assunto;
	}
	
	public int getUsuarioID() {
		return usuarioID;
	}
	
	public void setUsuarioID(int usuarioID) {
		this.usuarioID = usuarioID;
	}
	
	@Override
	public String toString() {
		return "Topico [idTopico=" + idTopico + ", nComentarios=" + nComentarios + ", titulo=" + titulo
				+ ", votosTopico=" + votosTopico + ", dataTopico=" + dataTopico + ", assunto="
				+ assunto + ", usuarioID=" + usuarioID + "]";
	}
	
	public String jsonCreationTopico(Topico topico) {// Chamar no click -> Fazer verificação pre envio -> no Js
		JSONObject jasonUsuario = new JSONObject(); // iniciação do obj json com passagem de string
		jasonUsuario.put("idTopico",topico.getIdTopico());
		jasonUsuario.put("nComentarios",topico.getNComentarios());
		jasonUsuario.put("titulo",topico.getTitulo());
		jasonUsuario.put("votosTopico",topico.getVotosTopico());
		jasonUsuario.put("dataTopico",topico.getDataTopico());
		jasonUsuario.put("assunto",topico.getAssunto());
		jasonUsuario.put("usuarioID",topico.getUsuarioID());
		return jasonUsuario.toString();// Verificar necessidade
	}
	
	public JSONObject ErrorTopico() {// Chamar no click -> Fazer verificação pre envio -> no Js
		JSONObject jasonUsuarioError = new JSONObject(); // iniciação do obj json com passagem de string
		jasonUsuarioError.put("Erro","Erro");
		return jasonUsuarioError;// Verificar necessidade
	}

}