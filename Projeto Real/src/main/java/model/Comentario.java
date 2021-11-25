package model;

import java.sql.Date;
import org.json.JSONException;
import org.json.JSONObject;
import dao.DAO;

public class Comentario {
	
	private int idComentario;
	private String conteudo;
	private int votosComentario;
	private String dataComentario;
	private int usuarioID;
	private int topicoID;
	
	public Comentario() {
		this.idComentario = -1;
		this.conteudo = conteudo;
		this.votosComentario = -1;
		this.dataComentario = dataComentario;
		this.usuarioID = usuarioID;
		this.topicoID = topicoID;
	}
	
	public Comentario( int idComentario, String conteudo, int votosComentario, String dataComentario, int usuarioID, int topicoID) {
		this.idComentario = idComentario;
		this.conteudo = conteudo;
		this.votosComentario = votosComentario;
		this.dataComentario = dataComentario;
		this.usuarioID = usuarioID;
		this.topicoID = topicoID;
	}
	
	public int getIdComentario() {
		return idComentario;
	}
	
	public void setIdComentario(int idComentario) {
		this.idComentario = idComentario;
	}
	
	public String getConteudo() {
		return conteudo;
	}
	
	public void setConteudo(String conteudo) {
		this.conteudo = conteudo;
	}
	
	public int getVotosComentario() {
		return votosComentario;
	}
	
	public void setVotosComentario(int votosComentario) {
		this.votosComentario = votosComentario;
	}
	
	public String getDataComentario() {
		return dataComentario;
	}
	
	public void setDataComentario(String dataComentario) {
		this.dataComentario = dataComentario;
	}

	public int getUsuarioID() {
		return usuarioID;
	}
	
	public void setUsuarioID(int usuarioID) {
		this.usuarioID = usuarioID;
	}
	
	public int getTopicoID() {
		return topicoID;
	}
	
	public void setTopicoID(int topicoID) {
		this.topicoID = topicoID;
	}
	
	@Override
	public String toString() {
		return "Comentario [idComentario=" + idComentario + ", conteudo=" + conteudo + ", votosComentario=" + votosComentario +
				", dataComentario=" + dataComentario + ", usuarioID=" + usuarioID + ", topicoID="+ topicoID +"]";
	}
	
	public String jsonCreationComentario(Comentario comentario) {// Chamar no click -> Fazer verificação pre envio -> no Js
		JSONObject jasonUsuario = new JSONObject(); // iniciação do obj json com passagem de string
		jasonUsuario.put("idComentario",comentario.getIdComentario());
		jasonUsuario.put("conteudo",comentario.getConteudo());
		jasonUsuario.put("votosComentario",comentario.getVotosComentario());
		jasonUsuario.put("dataComentario",comentario.getDataComentario());
		jasonUsuario.put("usuarioID",comentario.getUsuarioID());
		jasonUsuario.put("topicoID",comentario.getTopicoID());
		return jasonUsuario.toString();// Verificar necessidade
	}
	
	public JSONObject ErrorComentario() {// Chamar no click -> Fazer verificação pre envio -> no Js
		JSONObject jasonUsuarioError = new JSONObject(); // iniciação do obj json com passagem de string
		jasonUsuarioError.put("Erro","Erro");
		return jasonUsuarioError;// Verificar necessidade
	}

}