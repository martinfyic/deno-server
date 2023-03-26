import { React, ReactDOMServer } from './dependencies.ts';

const Varios = (props: Array<string>) => {
	const colors = Object.values(props);
	return (
		<div>
			<h3>Los colores ingresados fueron:</h3>
			<ul>
				{colors.map((color, index) => {
					return (
						<li
							key={index}
							style={{ color: color }}
						>
							{color}{' '}
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default (props: Array<string> = []) =>
	`<!DOCTYPE html>
  <html lang="en">
  <head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>🦕 Deno Server</title>
  </head>
  <body style="background-color: black; font-size: x-large; margin: 50px;">
	<h1 style="font-size: 4rem; margin: 10px; text-align: center; color: white;">Deno Server 🦕</h1>
  ${ReactDOMServer.renderToString(
		<>
			<form
				action='/'
				method='post'
			>
				<input
					name='textColor'
					placeholder='Ingrese un color en inglés'
					type='text'
				/>
				<button type='submit'>Enviar</button>
			</form>
			<hr />
			<Varios {...props} />
		</>
	)}
  </body>
  </html>
`;
