
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

        
        if (response.ok) {
            const data = await response.json();
            return {status: true, dados: data};
        }
        
        if(response.status == 500 || response.status == 502 || response.status == 503) {
            return {status: response.status, dados: "Ocorreu algum erro, tente novamente mais tarde!"};
        }

        return {status: response.status, dados: `Error: ${response.status}`}
        
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

        if (response.ok) {
            const data = await response.json();
            return {status: true, dados: data};
        }
        
        if(response.status == 500 || response.status == 502 || response.status == 503) {
            return {status: response.status, dados: "Ocorreu algum erro, tente novamente mais tarde!"};
        }

        return {status: response.status, dados: `Error: ${response.status}`}
    } catch (error) {
        console.error('Erro na requisição GET:', error);
        throw error;
    }
}
