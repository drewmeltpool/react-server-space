import React from 'react'

const Server = () => {
	return (
		<div className='layout__container'>
			<div className='layout__content main-content'>
				<div id='app'>
					<h1 className='heading__title'> Создайте облачный сервер </h1>
					<div className='start-page'>
						<div className='description'>
							Используйте высокопроизводительные облачные серверы для любых
							задач
						</div>
						<ul className='list'>
							<li className='list__item'>
								Новейшие процессоры Xeon Gold 3.1 ГГц
							</li>
							<li className='list__item'>Скоростные SSD-накопители</li>
							<li className='list__item'>Быстрое наращивание ресурсов</li>
						</ul>
					</div>
					<a href='/server/info' className='btn btn-primary btn-lg empty__btn'>
						Создать сервер
					</a>
				</div>
			</div>
		</div>
	)
}

export default Server
