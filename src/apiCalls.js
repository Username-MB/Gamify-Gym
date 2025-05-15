async function login(event) {
  event.preventDefault();
  const data = new FormData(event.target);

  const username = data.get("username");
  const password = data.get("password");

  try {
    const response = await fetch(`${import.meta.env.VITE_BACKENDURL}/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, password }),
    });
    if (response.ok) {
      const data = await response.json();
      const token = data.token;

      const expires = new Date(
        Date.now() + 7 * 24 * 60 * 60 * 1000
      ).toUTCString();
      document.cookie = `token=${token}; expires=${expires}; path=/;`;
    }
  } catch (error) {
    console.error("Erro ao fazer login: ", error);
  }
}

export { login };
