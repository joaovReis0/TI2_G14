package model;

import org.json.JSONException;
import org.json.JSONObject;
import dao.DAO;

public class Usuario {
	
	private int idUsuario;
	private String nome;
	private String emailUsuario;
	private String senhaUsuario;
	private String prefCurso;
	private String prefArea;
	
	public Usuario() {
		this.idUsuario = -1;
		this.nome = nome;
		this.emailUsuario = emailUsuario;
		this.senhaUsuario = senhaUsuario;
		this.prefCurso = prefCurso;
		this.prefArea = prefArea;
	}
	
	public Usuario(int idUsuario, String nome, String emailUsuario, String senhaUsuario, String prefCurso, String prefArea) {
		this.idUsuario = idUsuario;
		this.nome = nome;
		this.emailUsuario = emailUsuario;
		this.senhaUsuario = senhaUsuario;
		this.prefCurso = prefCurso;
		this.prefArea = prefArea;
	}
	
	public int getIdUsuario() {
		return idUsuario;
	}
	
	public void setIdUsuario(int idUsuario) {
		this.idUsuario = idUsuario;
	}
	
	public String getNome() {
		return nome;
	}
	
	public void setNome(String nome) {
		this.nome = nome;
	}
	
	public String getEmailUsuario() {
		return emailUsuario;
	}
	
	public void setEmailUsuario(String emailUsuario) {
		this.emailUsuario = emailUsuario;
	}
	
	public String getSenhaUsuario() {
		return senhaUsuario;
	}
	
	public void setSenhaUsuario(String senhaUsuario) {
		this.senhaUsuario = senhaUsuario;
	}
	
	public String getPrefCurso() {
		return prefCurso;
	}
	
	public void setPrefCurso(String prefCurso) {
		this.prefCurso = prefCurso;
	}
	
	public String getPrefArea() {
		return prefArea;
	}
	
	public void setPrefArea(String prefArea) {
		this.prefArea = prefArea;
	}
	
	@Override
	public String toString() {
		return "Usuario [idUsuario=" + idUsuario + ", nome=" + nome + ", senhaUsuario=" + senhaUsuario
				+ ", emailUsuario=" + emailUsuario + ", prefCurso=" + prefCurso + ", prefArea="
				+ prefArea + "]";
	}
	
	public String jsonCreationUsuario(Usuario usuario) {// Chamar no click -> Fazer verificação pre envio -> no Js
		JSONObject jasonUsuario = new JSONObject(); // iniciação do obj json com passagem de string
		jasonUsuario.put("idUsuario",usuario.getIdUsuario());
		jasonUsuario.put("nomeUsuario",usuario.getNome());
		jasonUsuario.put("senhaUsuario",usuario.getSenhaUsuario());
		jasonUsuario.put("emailUsuario",usuario.getEmailUsuario());
		jasonUsuario.put("prefCurso",usuario.getPrefCurso());
		jasonUsuario.put("prefArea",usuario.getPrefArea());
		return jasonUsuario.toString();// Verificar necessidade
	}
	
	public JSONObject ErrorUsuario() {// Chamar no click -> Fazer verificação pre envio -> no Js
		JSONObject jasonUsuarioError = new JSONObject(); // iniciação do obj json com passagem de string
		jasonUsuarioError.put("Erro","Erro");
		return jasonUsuarioError;// Verificar necessidade
	}
	
	public String paginadeLogin(String []usuario) {
		JSONObject jasonUsuarioLogin = new JSONObject();
		jasonUsuarioLogin.put("idUsuario",usuario[1]);
		jasonUsuarioLogin.put("usuario",usuario[0]);
		return jasonUsuarioLogin.toString();
	}

}