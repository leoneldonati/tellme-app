export class Api {
  serverHost: string;

  constructor(serverHost: string) {
    this.serverHost = serverHost;
  }

  async post(endPoint: string, payload: FormData) {
    try {
      const res = await fetch(this.serverHost + endPoint, {
        method: "POST",
        body: payload,
        credentials: "include",
      });
      const data = await res.json();

      return data;
    } catch (e) {
      console.log(e);
      throw new Error(`New error: ${e}`);
    }
  }

  async get(endPoint: string) {
    try {
      const res = await fetch(this.serverHost + endPoint, {
        method: "GET",
        credentials: "include",
      });

      if (res.status === 403) return ({status: 403, message: 'La sesión ha expirado!'})
      const data = await res.json();

      return data;
    } catch (e) {
      console.log(e);
      throw new Error(`New error: ${e}`);
    }
  }
}
