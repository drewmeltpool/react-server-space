import React from 'react'

const DNS = () => {
	return (
		<div className='layout__container'>
			<div className='layout__content main-content'>
				<div id='app'>
					<h1 className='heading__title'>
						Делегируйте домен на наши DNS-серверы
					</h1>
					<div className='start-page'>
						<div className='description'>
							Быстрое и простое управление всеми типами DNS-записей. Подробную
							инструкцию по этой услуге можно прочитать здесь.
						</div>
						<ul className='list'>
							<li className='list__item'>Бесплатная услуга для всех</li>
							<li className='list__item'>Мгновенное внесение изменений</li>
							<li className='list__item'>Автоматический перенос DNS-записей</li>
						</ul>
					</div>
					<a href='/server/info' className='btn btn-primary btn-lg empty__btn'>
						Добавить домен
					</a>
				</div>
			</div>
		</div>
	)
}

export default DNS
