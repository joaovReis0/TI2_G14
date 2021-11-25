package dao;


import java.sql.*;
import java.util.*;
import java.util.ArrayList;
import org.json.JSONObject;
import model.Usuario;
import model.Topico;
import model.Comentario;


public class DAO {
	private Connection conexao;
	
	public DAO() {
		conexao = null;
	}
	
	public boolean conectar() {
		String driverName = "org.postgresql.Driver";
		String serverName = "localhost";
		String mydatabase = "qvocacao";
		int porta = 5432;
		String url = "jdbc:postgresql://" + serverName + ":" + porta + "/" + mydatabase;
		String username = "postgres";
		String password = "senha1234";
		boolean status = false;
		
		try {
			Class.forName(driverName);
			conexao = DriverManager.getConnection(url, username, password);
			status = (conexao == null);
			System.out.println("Conex�o efetuada com o postgres!");
		} catch (ClassNotFoundException e) {
			System.err.println("Conex�o N�O efetuada com o postgres -- Driver n�o encontrado -- " + e.getMessage());
		} catch (SQLException e) {
			System.err.println("Conex�o N�O efetuada com o postgres -- " + e.getMessage());
		}
		
		return status;	
	}
	
	public boolean close() {
		boolean status = false;
		try {
			conexao.close();
			status = true;
		} catch (SQLException e) {
			System.err.println(e.getMessage());
		}
		
		return status;
	}
	
	/* ------------          Inicio da Parte de Usuario           ----------------------------------*/
	
	public Usuario getUsuario(int idUsuario) {
		Usuario usuario = null;
		try {
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);;
			ResultSet rs = st.executeQuery("SELECT * FROM usuario WHERE  idusuario = '" + idUsuario + "'");
			if(rs.next()) {
				usuario = new Usuario(
						rs.getInt("idUsuario"),
						rs.getString("nome"),
						rs.getString("emailUsuario"),
						rs.getString("senhaUsuario"),
						rs.getString("prefCurso"),
						rs.getString("prefArea")
					);
			}		
			st.close();
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
		return usuario;
	}
	
	public Usuario[] getUsuarios() {
		Usuario[] usuarios = null;
		try {
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);;
			ResultSet rs = st.executeQuery("SELECT * FROM usuario");
			if (rs.next()) {
				rs.last(); 
				usuarios = new Usuario[rs.getRow()];
				rs.beforeFirst();
				for (int i = 0; rs.next(); i++) {
					usuarios[i] = new Usuario(
						rs.getInt("idUsuario"),
						rs.getString("nome"),
						rs.getString("emailUsuario"),
						rs.getString("senhaUsuario"),
						rs.getString("prefCurso"),
						rs.getString("prefArea")
					);			
				}
			}
			st.close();
		} catch (SQLException e) {
			System.out.println(e.getMessage());
			throw new RuntimeException(e);
		}
		return usuarios;
	}
	
	public boolean inserirUsuario(Usuario usuario) {
		boolean status = false;
		try {
			Statement st = conexao.createStatement();
			String sql = "INSERT INTO usuario (idusuario, nome, emailusuario, senhausuario, prefcurso, prefarea)"
					+ " VALUES (" + usuario.getIdUsuario() + ", '" + usuario.getNome()+ "', '" + usuario.getEmailUsuario()
					+ "', '" + usuario.getSenhaUsuario() + "', '" + usuario.getPrefCurso() + "', '"  + usuario.getPrefArea() + "');";
			st.executeUpdate(sql);
			st.close();
			status = true;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
		
		return status;
	}
	
	
	 public boolean loginUsuario(String senha, String email) {	
		boolean success = false;
		try {
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);;
			ResultSet rs = st.executeQuery("SELECT nome FROM usuario WHERE senhausuario  = '" + senha + "' AND emailusuario = '" + email + "'");
			if (rs.next()) success = true;
			st.close();
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
		return success;
	 }
	
	
	public boolean atualizarUsuario(Usuario usuario) {
		boolean status = false;
		try {
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);;
			String sql = "UPDATE usuario SET email = '" + usuario.getEmailUsuario() + "', nome = '" + usuario.getNome()
			+ "', senha = '" + usuario.getSenhaUsuario() + "', prefcurso = '" + usuario.getPrefCurso() 
			+ "', prefarea = '" + usuario.getPrefArea() + "'" + " WHERE idusuario = " + usuario.getIdUsuario();
			st.executeUpdate(sql);
			status = true;
			st.close();
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
		return status;
	}
	
	public int getMaxIdUsuario() {
		int id = 0;
		try {
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);;
			ResultSet rs = st.executeQuery("select max(idusuario) as max_id from usuario");
			if (rs.next())
				id = rs.getInt("max_id");
			st.close();
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
		return id;
	}
	
	public String[] pegarNomeUsuario() {
		int pegarValor = Integer.parseInt(retornarOsids()[1]);
		String[] nomes = new String[pegarValor];
		try {
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
			ResultSet rs = st.executeQuery("SELECT nome FROM usuario ");
			if (rs.next()) {
				rs.last();
				rs.beforeFirst();
				for (int i = 0; rs.next(); i++) {
					nomes[i] = rs.getString("nome");
				}
			}
			st.close();
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return nomes;
	}
	
	/*------------------------    Fim da Parte de Usuarios        ----------------------*/
	
	/*------------------------    Inicio da Parte de Topicos        ----------------------*/
	
	public int getMaxIdTopico() {
		int id = 0;
		try {
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);;
			ResultSet rs = st.executeQuery("select max(idtopico) as max_id from topico");
			rs.next();
			id = rs.getInt("max_id");
			st.close();
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
		return id;
	}
	
	public boolean inserirTopico(Topico topico) {
		boolean status = false;
		try {
			Statement st = conexao.createStatement(); //  int idTopico, int nComentarios, String titulo, int votosTopico, String dataTopico, String assunto, int usuarioID
			String sql = "INSERT INTO topico (idTopico, nComentarios, titulo, votosTopico, dataTopico, assunto, usuarioID)"
					+ " VALUES (" + topico.getIdTopico() + ", '" + topico.getNComentarios()+ "', '" + topico.getTitulo()
					+ "', '" + topico.getVotosTopico() + "', '" + topico.getDataTopico() + "', '"  + topico.getAssunto() +"', '" + topico.getUsuarioID() +"');";
			st.executeUpdate(sql);
			st.close();
			status = true;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
		
		return status;
	}
	
	/*------------------------    Fim da Parte de Topicos        ----------------------*/
	
	/*------------------------    Inicio da Parte de Comentarios       ----------------------*/

	public int getMaxIdComentario() {
		int id = 0;
		try {
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);;
			ResultSet rs = st.executeQuery("select max(idcomentario) as max_id from comentario");
			rs.next();
			id = rs.getInt("max_id");
			st.close();
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
		return id;
	}
	
	public boolean inserirComentario(Comentario comentario) {
		boolean status = false;
		try {
			Statement st = conexao.createStatement(); //  int idComentario, String conteudo, int votosComentario, String dataComentario, int usuarioID, int topicoID
			String sql = "INSERT INTO comentario (idComentario, conteudo, votosComentario, dataComentario, usuarioID, topicoID)"
					+ " VALUES (" + comentario.getIdComentario() + ", '" + comentario.getConteudo()+ "', '" + comentario.getVotosComentario()
					+ "', '" + comentario.getDataComentario() + "', '" + comentario.getUsuarioID() + "', '"  + comentario.getTopicoID() + "');";
			st.executeUpdate(sql);
			st.close();
			status = true;
		} catch (SQLException e) {
			throw new RuntimeException(e);
		}
		
		return status;
	}
	
	/*------------------------    Fim da Parte de Comentarios        ----------------------*/
	
	/*------------------------ Inicio de Fun��es de Utilidade ------------------------*/
	// ira retornar os ultimos ids de usuarios
	public String[] retornarOsids() {
		String[] idsGet = new String[4];
		try {
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
			ResultSet rs = st.executeQuery("SELECT idusuario FROM usuario ");
			if (rs.last()) {
				idsGet[1] = Integer.toString(rs.getInt("idusuario"));
				// System.out.println("ultimo id de usuario =="+idsGet[1]);
			} else {
				idsGet[1] = "0";
				// System.out.println("ultimo id de usuario =="+idsGet[1]);
			}
			st.close();
		} catch (Exception e) {
			System.err.println(e.getMessage() + "em pegar id usuario");
		}
		
		try {
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
			ResultSet rs = st.executeQuery("SELECT idtopico FROM topico ");
			if (rs.last()) {
				idsGet[3] = Integer.toString(rs.getInt("idtopico"));
				// System.out.println("ultimo id de comentario =="+idsGet[3]);
			} else {
				idsGet[3] = "0";
				// System.out.println("ultimo id de comentario =="+idsGet[3]);
			}
			st.close();
		} catch (Exception e) {
			System.err.println(e.getMessage() + "em pegar id comentario");
		}

		try {
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
			ResultSet rs = st.executeQuery("SELECT idcomentario FROM comentario ");
			if (rs.last()) {
				idsGet[3] = Integer.toString(rs.getInt("idcomentario"));
				// System.out.println("ultimo id de comentario =="+idsGet[3]);
			} else {
				idsGet[3] = "0";
				// System.out.println("ultimo id de comentario =="+idsGet[3]);
			}
			st.close();
		} catch (Exception e) {
			System.err.println(e.getMessage() + "em pegar id comentario");
		}

		return idsGet;
	}

	public String jasonIds(String[] ids) {

		JSONObject jasoNIds = new JSONObject();
		jasoNIds.put("idusuario", ids[0]);
		jasoNIds.put("idtopico", ids[1]);
		jasoNIds.put("idcomentario", ids[2]);

		return jasoNIds.toString();
	}
	
	/// login em nosso site
	public String[] fazerloginNoSite(String[] valores) {
		String[] saber = new String[3];
		try {
			Statement st = conexao.createStatement(ResultSet.TYPE_SCROLL_INSENSITIVE, ResultSet.CONCUR_READ_ONLY);
			ResultSet rs = st.executeQuery("SELECT * FROM usuario ");
		if (rs.next()) {
			rs.last();
			rs.beforeFirst();
			for (int i = 0; rs.next(); i++) {
				if (rs.getString("nome").equals(valores[0])) {
					if (rs.getString("senha").equals(valores[1])) {
						saber[0] = "Usuario";
						saber[1] = rs.getString("idusuario");
						return saber;
					}
				}
			}
		}
		st.close();
			
		} catch (Exception e) {
			System.err.println(e.getMessage());
		}
		return null;
	}
	
}