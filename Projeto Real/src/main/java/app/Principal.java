package app;

import service.UsuarioService;
import java.io.BufferedInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URISyntaxException;
import java.net.URL;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

import model.Usuario;
import model.Comentario;
import model.Topico;
import dao.DAO;

import com.azure.core.credential.AzureKeyCredential;
import com.azure.ai.textanalytics.models.*;
import com.azure.ai.textanalytics.TextAnalyticsClientBuilder;
import com.azure.ai.textanalytics.TextAnalyticsClient;

import spark.utils.IOUtils;
import static spark.Spark.*;

public class Principal {
    public static void main(String[] args) {
    	port(7007);
    	staticFiles.location("src/main/resources"); // pegar todos os documentos da pasta reources
		RetornaroFront mandarSite = new RetornaroFront();// chamar class que ira mandar nossa pagina html para a tela
    	
    	UsuarioService service = new UsuarioService();
    	DAO dao = new DAO();
    	dao.conectar();
    	
        get("/", (req, res) -> mandarSite.renderContent("/index.html"));
        get("/cadastro", (req, res) -> mandarSite.renderContent("/Cadastro.html"));
        get("/login", (req, res) -> mandarSite.renderContent("/Login.html"));
        get("/forum", (req, res) -> mandarSite.renderContent("/Forum.html"));
        get("/topico", (req, res) -> mandarSite.renderContent("/Thread.html"));
        
        // mandar os ids para o front end
     	get("/Ids", (req, res) -> {

     		String[] idsget = dao.retornarOsids();
     		res.header("Access-Control-Allow-Origin", "*");
     		res.header("Access-Control-Allow-Methods", "POST,GET");
     		res.header("Access-Control-Allow-Headers", "*");
     		res.header("Access-Control-Max-Age", "86400");
     		
     		return dao.jasonIds(idsget);
     	});
     	
		// mandar Usuario para o front e para o bd
     	get("/mandarRe", (req, res) -> {

			String nomeUU = "";
			boolean verdade = true;
			System.out.println(nomeUU = req.queryParams("query"));
			String[] realocacao = nomeUU.split(",");
			String[] idsget = dao.retornarOsids();
			int idUser = Integer.parseInt(idsget[1]);
			idUser++;
			Usuario alocar = new Usuario(idUser, realocacao[0], realocacao[1], realocacao[2], realocacao[3], realocacao[4]);
			res.header("Access-Control-Allow-Origin", "*");
			res.header("Access-Control-Allow-Methods", "POST,GET");
			res.header("Access-Control-Allow-Headers", "*");
			res.header("Access-Control-Max-Age", "86400");

			String[] receber = dao.pegarNomeUsuario();
			int foo = Integer.parseInt(idsget[1]);
			for (int i = 0; i < foo; i++) {
				if (receber[i].equals(realocacao[0])) {
					verdade = false;
					return alocar.ErrorUsuario();
				}

			}

			if (verdade) {
				dao.inserirUsuario(alocar);
			}
			return alocar.jsonCreationUsuario(alocar);
		});
    }
}

class RetornaroFront {

	// String renderContent fuciona para colocar os html na pagina
	public String renderContent(String htmlFile) throws IOException, URISyntaxException {
		return new String(Files.readAllBytes(Paths.get(getClass().getResource(htmlFile).toURI())),
				StandardCharsets.UTF_8);
	}
}