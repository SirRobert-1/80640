package mx.uv;

import static spark.Spark.*;
import  com.google.gson.*;
import java.util.Scanner;

/**
 * Hello world!
 *
 */
public class App 
{
    static String nombre;
    static String apellido;
    public static void main( String[] args )
    {
        System.out.println( "Hello World!" );
        options("/*",(request,response)->{
            String accessControlRequestHeaders=request.headers("Access-Control-Request-Headers");
            if(accessControlRequestHeaders!=null){
                response.header("Access-Control-Allow-Headers",accessControlRequestHeaders);
            }
            String accessControlRequestMethod=request.headers("Access-Control-Request-Method");
            if(accessControlRequestMethod!=null){
                response.header("Access-Control-Allow-Methods",accessControlRequestMethod);
                }
            return "OK";
        });
        before((request,response)->response.header("Access-Control-Allow-Origin","*"));
        get("/", (request, response) ->{
            return "<h1>Hola mundo</h1>";
        });
        get("/crear", (request,response) -> {
            nombre =  request.queryParams("nombre");
            apellido =  request.queryParams("apellido");
            
            return  "Nombre registrado";
        });
        post("/leer", (request,response) -> {
            return  "Los datos son: "+ nombre + " " + apellido;
        });
        get("/actualizar", (request,response) -> {
            nombre =  request.queryParams("nombre");
            apellido =  request.queryParams("apellido");
            
            return  "Nombre actualizado";
        });
        delete("/eliminar", (request,response) -> {
           nombre = "";
           apellido ="";
            
            return  "Datos eliminados";
        });
    }
}
