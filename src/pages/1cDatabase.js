import React from 'react'

const OneCDB = () => {
	return (
		<div className='layout-main'>
			<div className='layout__container'>
				<main className='layout__content main-content'>
					<div id='app'>
						<h1 className='heading__title'> Создайте базу 1С </h1>
						<div className='start-page'>
							<div className='description'>
								Создайте свою базу 1С за 5 минут и оцените все преимущества 1С в
								облаке
							</div>
							<ul className='list'>
								<li className='list__item'> Быстрый старт за 5 минут</li>
								<li className='list__item'>
									{' '}
									Производительные процессоры 3 ГГц
								</li>
								<li className='list__item'>
									{' '}
									Все лицензии уже включены в стоимость
								</li>
							</ul>
						</div>
						<a href='/1c/db' className='btn btn-primary btn-lg empty__btn'>
							Создать базу 1С
						</a>
					</div>
				</main>
			</div>
		</div>
	)
}

export default OneCDB
