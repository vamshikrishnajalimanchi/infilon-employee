import { createServer, Model } from "miragejs";
// @ts-ignore - Ignoring type error for MirageJS schema
export function makeServer() {
  createServer({
    models: {
      employee: Model,
    },

    seeds(server) {
        // @ts-ignore - Ignoring type error for MirageJS schema
      server.create("employee", { id: 1, name: "John Doe", position: "Manager", department: "Sales" });
      // @ts-ignore - Ignoring type error for MirageJS schema
      server.create("employee", { id: 2, name: "Jane Smith", position: "Developer", department: "IT" });
      // Add more employees as needed
    },

    routes() {
      this.namespace = "api";

      this.get("/employees", (schema) => {
        return schema.all("employee");
      });

      this.post("/employees", (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.create("employee", attrs);
      });
// @ts-ignore - Ignoring type error for MirageJS schema
      this.put("/employees/:id", (schema, request) => {
        let newAttrs = JSON.parse(request.requestBody);
        let id = request.params.id;
        let employee = schema.find("employee", id);

        return employee?.update(newAttrs);
      });
// @ts-ignore - Ignoring type error for MirageJS schema
      this.delete("/employees/:id", (schema, request) => {
        let id = request.params.id;
        return schema.find("employee", id)?.destroy();
      });
    },
  });
}