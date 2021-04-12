import React from 'react'

const SSL = () => {
	return (
		<div className='layout__container'>
			<div className='layout__content main-content'>
				<div id='app'>
					<h1 className='heading__title'>Закажите SSL-сертификат</h1>
					<div className='start-page'>
						<div className='description'>
							Защищайте платежи, персональные данные, почтовые серверы и решайте
							другие задачи с помощью надежных SSL-сертификатов от проверенных
							брендов
						</div>
						<ul className='list'>
							<li className='list__item'>DV, EV, WildCard, SAN</li>
							<li className='list__item'>Стоимость без наценки</li>
							<li className='list__item'>Оформление от 2 минут</li>
						</ul>
					</div>
					<a href='/server/info' className='btn btn-primary btn-lg empty__btn'>
						Заказать Сертификат
					</a>
				</div>
			</div>
		</div>
	)
}

export default SSL
