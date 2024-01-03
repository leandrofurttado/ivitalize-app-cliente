

// Função para requisição POST
export async function api_post(url, formData) {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro na requisição POST:', error);
        throw error;
    }
}

// Função para requisição GET
export async function api_get(url) {
    try {
        const response = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erro na requisição GET:', error);
        throw error;
    }
}
