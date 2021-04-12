import React from 'react'

const Net = () => {
	return (
		<div className='layout__container'>
			<div className='layout__content main-content'>
				<div id='app'>
					<h1 className='heading__title'>Создайте виртуальную сеть</h1>
					<div className='start-page'>
						<div className='description'>
							Настройка сетевого взаимодействия между виртуальными серверами с
							помощью объединения их в сети внутри ЦОД до 1 Гбит/с
						</div>
						<ul className='list'>
							<li className='list__item'>Бесплатные изолированные сети</li>
							<li className='list__item'>
								Маршрутизируемые сети с доступом в Интернет
							</li>
							<li className='list__item'>
								Публичные сети с закрепленным непрерывным пулом IPv4-адресов
							</li>
						</ul>
					</div>
					<a href='/server/info' className='btn btn-primary btn-lg empty__btn'>
						Создать сеть
					</a>
				</div>
			</div>
		</div>
	)
}

export default Net
