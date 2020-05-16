using System;
using System.IO;
using System.Text;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace CML_JSON_CS {
	class Program {
		static void Main(string[] args) {
			Console.WriteLine("Hello JSON!");

			JSONSimple(); //Crea un JSON simple

			JSONAnidado(); // Crea un JSON con un objeto anidado

			JSONArrayAnidado(); // Crea un JSON con un array anidado de objetos

			LeerJSONSimple(); // Lee el JSON Simple

			LeerJSONAnidado(); //Lee el JSON con objeto anidado

			LeerJSONAnidadoWArray(); //Lee el JSON con array anidado
		}
		static void JSONSimple() {
			JsonWriterOptions jsonWOpt = new JsonWriterOptions {
				Indented = true
			};
			using (var ms = new MemoryStream()) {
				using (var writer = new Utf8JsonWriter(ms, jsonWOpt)) {
					writer.WriteStartObject();
					writer.WriteString("nombre", "scrapywar.com");
					writer.WriteNumber("edad", 22);
					writer.WriteEndObject();
				}
				string jsonstr = Encoding.UTF8.GetString(ms.ToArray());
				Console.WriteLine("JSON Simple: " + jsonstr);
				File.WriteAllText("yo.json", jsonstr);
			}
		}
		static void LeerJSONSimple() {
			string json_str = File.ReadAllText("yo.json"); //Lee el archivo yo.json almacenado en el mismo directorio del programa.

			JsonDocumentOptions JDOps = new JsonDocumentOptions {
				AllowTrailingCommas = true
			};
			JsonDocument jsondoc = JsonDocument.Parse(json_str, JDOps);
			JsonElement Root = jsondoc.RootElement;

			Console.WriteLine($"JSON Simple: Nombre: {Root.GetProperty("nombre")} y edad: {Root.GetProperty("edad")}");
		}
		static void JSONAnidado() {
			JsonWriterOptions jsonWOpt = new JsonWriterOptions {
				Indented = true
			};
			using (var ms = new MemoryStream()) {
				using (var writer = new Utf8JsonWriter(ms, jsonWOpt)) {
					writer.WriteStartObject();
					writer.WriteString("nombre", "scrapywar.com");
					writer.WriteStartObject("admins");
					writer.WriteString("usuario", "nosoyadmin");
					writer.WriteString("contrasena", "NoMeAcuerdo");
					writer.WriteEndObject();
					writer.WriteEndObject();
				}
				string jsonstr = Encoding.UTF8.GetString(ms.ToArray());
				Console.WriteLine("JSON Anidado: " + jsonstr);
				File.WriteAllText("yo2.json", jsonstr);
			}
		}
		static void LeerJSONAnidado() {
			string json_str = File.ReadAllText("yo2.json"); //Lee el archivo yo2.json almacenado en el mismo directorio del programa.

			JsonDocumentOptions JDOps = new JsonDocumentOptions {
				AllowTrailingCommas = true
			};
			JsonDocument jsondoc = JsonDocument.Parse(json_str, JDOps);
			JsonElement Root = jsondoc.RootElement;
			JsonElement admins = Root.GetProperty("admins");
			Console.WriteLine($"JSON anidado: Usuario: {admins.GetProperty("usuario")}, Contraseña: {admins.GetProperty("contrasena")}");
		}
		static void JSONArrayAnidado() {
			JsonWriterOptions jsonWOpt = new JsonWriterOptions {
				Indented = true
			};
			using (var ms = new MemoryStream()) {
				using (var writer = new Utf8JsonWriter(ms, jsonWOpt)) {
					writer.WriteStartObject();
					writer.WriteString("nombre", "scrapywar.com");
					writer.WriteStartArray("admins");

					writer.WriteStartObject();
					writer.WriteString("usuario", "nosoyadmin");
					writer.WriteString("contrasena", "NoMeAcuerdo");
					writer.WriteEndObject();

					writer.WriteStartObject();
					writer.WriteString("usuario", "nosoyadmin2");
					writer.WriteString("contrasena", "TampocoMeAcuerdo");
					writer.WriteEndObject();

					writer.WriteEndArray();
					writer.WriteEndObject();
				}
				string jsonstr = Encoding.UTF8.GetString(ms.ToArray());
				Console.WriteLine("JSON Anidado con Array: " + jsonstr);
				File.WriteAllText("yo3.json", jsonstr);
			}
		}
		static void LeerJSONAnidadoWArray() {
			string json_str = File.ReadAllText("yo3.json"); //Lee el archivo yo3.json almacenado en el mismo directorio del programa.

			JsonDocumentOptions JDOps = new JsonDocumentOptions {
				AllowTrailingCommas = true
			};

			JsonDocument jsondoc = JsonDocument.Parse(json_str, JDOps);
			JsonElement Root = jsondoc.RootElement;
			JsonElement admins = Root.GetProperty("admins");
			foreach (JsonElement Jitem in admins.EnumerateArray()) {
				Console.WriteLine($"JSON con Array anidado: Usuario: {Jitem.GetProperty("usuario")} | Contraseña: {Jitem.GetProperty("contrasena")}");
			}
		}

	}
}
