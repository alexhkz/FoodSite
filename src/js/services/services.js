const postData = async (url, data) => {
	const res = await fetch(url, {
		method: "POST",
			headers: {
				'Content-type': 'application/json'
			},
			body: data
	});

	return await res.json();
};

const getResource = async (url) => {
	let res = await fetch(url);

	if (!res.ok) { //если что-то пошло не так с запросом выдаём ошибку
		throw new Error(`Could not fetch ${url}, status: ${res.status}`); //если выдаём ошибку в ручном режиме, то срабатывает catch
	}

	return await res.json();
};

export {postData, getResource};