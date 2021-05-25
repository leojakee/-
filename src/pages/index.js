import React from "react";
import theme from "theme";
import { Theme, Link, Text, Section, Box, Input, Button } from "@quarkly/widgets";
import { Helmet } from "react-helmet";
import { GlobalQuarklyPageStyles } from "global-page-styles";
import { Override, StackItem, Stack, Formspree, SocialMedia } from "@quarkly/components";
import * as Components from "components";
export default (() => {
	return <Theme theme={theme}>
		<GlobalQuarklyPageStyles pageUrl={"index"} />
		<Helmet>
			<title>
				Quarkly export
			</title>
			<meta name={"description"} content={"Web site created using quarkly.io"} />
			<link rel={"shortcut icon"} href={"https://uploads.quarkly.io/readme/cra/favicon-32x32.ico"} type={"image/x-icon"} />
		</Helmet>
		<Components.QuarklycommunityKitMenu />
		<Section background="--color-darkL2" padding="64px 0" sm-padding="40px 0">
			<Stack color="#000000">
				<StackItem width="50%" lg-width="100%">
					<Override
						slot="StackItemContent"
						margin-right="-20%"
						padding-bottom="120%"
						background="#ffffff url(https://uploads.quarkly.io/60ace8e313e4b0001f82a6cc/images/RRsuMawe3Tk.jpg?v=2021-05-25T12:12:39.707Z) 90% 45% /cover"
						lg-margin-right="0"
						lg-padding-bottom="80%"
					/>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Override
						slot="StackItemContent"
						padding="98px 64px"
						margin-left="-20%"
						margin-top="36px"
						background="--color-greyD1 linear-gradient(0deg,rgba(0,0,0,0) 11.9%,rgba(0,0,0,1) 100%) right"
						color="--light"
						mix-blend-mode="lighten"
						lg-margin-left="0"
						lg-margin-top="0"
						flex-direction="column"
						border-color="#0f84ff"
					/>
					<Text
						as="h4"
						margin="0"
						font="--base"
						letter-spacing="1px"
						text-transform="uppercase"
					>
						про меня
					</Text>
					<Text
						as="h1"
						margin="0 0 16px 0"
						font="--headline1"
						lg-font="--headline2"
						border-color="#ffffff"
						color="rgba(255, 255, 255, 0.94)"
						position="relative"
						top="200px"
					>
						Привет, я Тимур!
					</Text>
					<Text
						as="p"
						margin="16px 0"
						font="--base"
						max-width="400px"
						position="relative"
						top="200px"
					>
						Меня зовут Тимур и я дизайнер! Делаю на заказ грамоты, афиши, благодарственные письма и типографику.
					</Text>
				</StackItem>
			</Stack>
		</Section>
		<Section text-align="center" padding="100px 0" sm-padding="40px 0">
			<Override slot="SectionContent" />
			<Text as="h1" font="--headline1" md-font="--headline2" margin="20px 0 0 0">
				Мои работы
			</Text>
			<Text as="p" font="--lead" margin="20px 0 0 0">
				Занимаясь дизайном для Казанского Научного Исследовательского Технологического Университета, набралось внушительное порфтолио с дизайном афиш, грамот и различных иллюстраций. Ниже представлены мои последние работы.
			</Text>
			<Box display="flex" margin="40px 0 20px 0" justify-content="space-around" sm-flex-direction="column">
				<Box padding="10px">
					<Components.QuarklycommunityKitCardFlip width="100%" min-width="350px" flipTriggerProp="hover" font="--headline2">
						<Override slot="Card Flip Content" />
						<Override slot="Card Flip Image" src="https://uploads.quarkly.io/60ace8e313e4b0001f82a6cc/images/%D0%BC%D0%B8%D1%81%D1%82%D0%B5%D1%80-%D0%BA%D0%BD%D0%B8%D1%82%D1%83.png?v=2021-05-25T12:26:55.674Z" />
						<Text font="900 25px/40px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif">
							Мистер КНИТУ это масштабное мероприятие, которое проводится среди студентов мужского пола, где они соревнуются в силе, интеллекте и харизме.
						</Text>
					</Components.QuarklycommunityKitCardFlip>
				</Box>
				<Box padding="10px">
					<Components.QuarklycommunityKitCardFlip width="100%" min-width="350px" flipTriggerProp="hover">
						<Override slot="Card Flip Content" />
						<Override slot="Card Flip Image" src="https://uploads.quarkly.io/60ace8e313e4b0001f82a6cc/images/1%20%D0%BC%202%20%D0%BC%D0%B5%D1%81%D1%82%D0%BE.jpg?v=2021-05-25T12:30:20.689Z" />
						<Text font="900 25px/40px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif">
							Мероприятие музыкальный бум ориентировано на студентов, которые следят за последними трендами музыки и хорошо знают зарубежных и отечественных исполнителей.
						</Text>
					</Components.QuarklycommunityKitCardFlip>
				</Box>
				<Box padding="10px">
					<Components.QuarklycommunityKitCardFlip width="100%" min-width="350px" flipTriggerProp="hover">
						<Override slot="Card Flip Content" />
						<Override slot="Card Flip Image" src="https://uploads.quarkly.io/60ace8e313e4b0001f82a6cc/images/123%20(1).png?v=2021-05-25T12:29:42.203Z" />
						<Text font="900 25px/40px -apple-system, system-ui, &quot;Segoe UI&quot;, Roboto, Oxygen, Ubuntu, Cantarell, &quot;Fira Sans&quot;, &quot;Droid Sans&quot;, &quot;Helvetica Neue&quot;, sans-serif">
							Здесь представлена афиша к мероприятию отомстители, где первокурсники заставляют старшие курсы пройти все то, что проходил первый курс в день посвящения.
						</Text>
					</Components.QuarklycommunityKitCardFlip>
				</Box>
			</Box>
			<Components.QuarklycommunityKitGallery>
				<Override slot="Item" fullSrc="https://uploads.quarkly.io/60ace8e313e4b0001f82a6cc/images/%D0%BB%D0%B5%D0%BD%D1%82%D0%B0-%D0%B8%D0%BD%D1%81%D1%82_03.jpg?v=2021-05-25T13:25:56.182Z" fullSrcSet="https://images.unsplash.com/photo-1621570274061-6b0c42c7bd13?ixlib=rb-1.2.1&q=85&fm=jpg&crop=entropy&cs=srgb&w=2000 " />
				<Override slot="Item 0" fullSrc="https://uploads.quarkly.io/60ace8e313e4b0001f82a6cc/images/%D0%BB%D0%B5%D0%BD%D1%82%D0%B0-%D0%B8%D0%BD%D1%81%D1%82_03.jpg?v=2021-05-25T13:25:56.182Z" previewSrcSet="https://uploads.quarkly.io/60ace8e313e4b0001f82a6cc/images/%D0%BB%D0%B5%D0%BD%D1%82%D0%B0-%D0%B8%D0%BD%D1%81%D1%82_03.jpg?v=2021-05-25T13:25:56.182Z " />
				<Override slot="Item 1" previewSrcSet="https://uploads.quarkly.io/60ace8e313e4b0001f82a6cc/images/%D0%BB%D0%B5%D0%BD%D1%82%D0%B0-%D0%B8%D0%BD%D1%81%D1%82_10.jpg?v=2021-05-25T13:27:08.663Z " />
				<Override slot="Item 2" previewSrcSet="https://uploads.quarkly.io/60ace8e313e4b0001f82a6cc/images/%D0%BB%D0%B5%D0%BD%D1%82%D0%B0-%D0%B8%D0%BD%D1%81%D1%82_11.jpg?v=2021-05-25T13:27:34.279Z " />
				<Override slot="Item 3" previewSrcSet="https://uploads.quarkly.io/60ace8e313e4b0001f82a6cc/images/%D0%BB%D0%B5%D0%BD%D1%82%D0%B0-%D0%B8%D0%BD%D1%81%D1%82_12.jpg?v=2021-05-25T13:27:58.528Z " />
				<Override slot="Item 4" previewSrcSet="https://uploads.quarkly.io/60ace8e313e4b0001f82a6cc/images/%D0%BB%D0%B5%D0%BD%D1%82%D0%B0-%D0%B8%D0%BD%D1%81%D1%82_09.jpg?v=2021-05-25T13:27:58.521Z " />
				<Override slot="Item 5" previewSrcSet="https://uploads.quarkly.io/60ace8e313e4b0001f82a6cc/images/%D0%BB%D0%B5%D0%BD%D1%82%D0%B0-%D0%B8%D0%BD%D1%81%D1%82_05.jpg?v=2021-05-25T13:27:58.510Z " />
				<Override slot="Item 6" previewSrcSet="https://uploads.quarkly.io/60ace8e313e4b0001f82a6cc/images/%D0%BB%D0%B5%D0%BD%D1%82%D0%B0-%D0%B8%D0%BD%D1%81%D1%82_07.jpg?v=2021-05-25T13:27:58.509Z " />
				<Override slot="Item 7" previewSrc="https://uploads.quarkly.io/60ace8e313e4b0001f82a6cc/images/%D0%BB%D0%B5%D0%BD%D1%82%D0%B0-%D0%B8%D0%BD%D1%81%D1%82_04.jpg?v=2021-05-25T13:27:58.509Z" />
			</Components.QuarklycommunityKitGallery>
		</Section>
		<Section
			padding="60px 0"
			sm-padding="40px 0"
			min-height="600px"
			sm-min-height="auto"
			background="--color-darkL2"
			display="flex"
			flex-direction="column"
		>
			<Stack color="--grey" font="--base">
				<StackItem width="50%" md-width="100%">
					<Text
						as="h1"
						margin="0px"
						font="--headline1"
						md-font="--headline2"
						color="--light"
						max-width="850px"
					>
						И это еще не все!
					</Text>
				</StackItem>
				<StackItem width="50%" md-width="100%">
					<Text margin="0px">
						В современном мире невозможно заниматься чем-то не пробуя себя в новом. Благодаря хорошему знанию Adobe Photoshop и Illustrator я смог так же разобраться в создании видео и анимаций для своих и чужих проектов.
					</Text>
				</StackItem>
			</Stack>
			<Components.QuarklycommunityKitVimeo video="https://vimeo.com/529781683" volume="0.4" color="#ffffff" loop />
			<Components.QuarklycommunityKitVimeo
				video="https://vimeo.com/554716579"
				volume="0.4"
				color="#ffffff"
				width="60%"
				showTitle
				responsive
				loop
				margin="70px 0px 0px 0px"
			/>
			<Text
				as="h1"
				margin="8px 0px 32px"
				font="normal 900 60px/1.2 --fontFamily-sans"
				md-font="--headline2"
				color="--light"
				max-width="850px"
				display="inline"
				position="relative"
				left="450px"
				bottom="600px"
				border-color="#ffffff"
			>
				Все это сделано и{" "}
				<br />
				опубликовано в{" "}
				<br />
				социальныйх сетях
				<br />
				данных событий
			</Text>
		</Section>
		<Section background="--color-light" color="--dark" padding="64px 0" lazy-load>
			<Stack>
				<StackItem width="50%" lg-width="100%">
					<Override slot="StackItemContent" flex-direction="column" />
					<Text
						font="--base"
						color="--grey"
						letter-spacing="1px"
						text-transform="uppercase"
						margin="0"
					>
						Контакты
					</Text>
					<Text font="--headline2" max-width="500px" margin="10px 0 0 0">
						Напишите мне, если вам понравились мои работы и хотите работать вместе!
					</Text>
				</StackItem>
				<StackItem width="50%" lg-width="100%">
					<Formspree endpoint="https://formspree.io/f/xyylwynq">
						<Stack gap="16px">
							<StackItem width="50%">
								<Override slot="StackItemContent" flex-direction="column" />
								<Text font="--base" margin="0 0 4px 0">
									Name
								</Text>
								<Input max-width="400px" width="100%" name="name" />
							</StackItem>
							<StackItem width="50%">
								<Override slot="StackItemContent" flex-direction="column" />
								<Text font="--base" margin="0 0 4px 0">
									Email
								</Text>
								<Input max-width="400px" width="100%" type="email" name="email" />
							</StackItem>
							<StackItem width="100%">
								<Override slot="StackItemContent" flex-direction="column" />
								<Text font="--base" margin="0 0 4px 0">
									Message
								</Text>
								<Input as="textarea" rows="4" width="100%" name="message" />
							</StackItem>
							<StackItem width="100%">
								<Button>
									Send
								</Button>
							</StackItem>
						</Stack>
					</Formspree>
				</StackItem>
			</Stack>
		</Section>
		<Section background="--color-darkL2" padding="60px 0" sm-padding="40px 0">
			<SocialMedia youtube="https://www.youtube.com/channel/UCN2j1xi1_NogCtIDU6-W93A" vkontakte="https://vk.com/leojakeee" instagram="https://www.instagram.com/_leojakee_/" github="https://github.com/leojakee">
				<Override
					slot="link"
					border-radius="50%"
					color="--grey"
					hover-color="--light"
					background="transparent"
					hover-background="transparent"
					margin="0 8px"
				/>
			</SocialMedia>
		</Section>
		<Link
			font={"--capture"}
			font-size={"10px"}
			position={"fixed"}
			bottom={"12px"}
			right={"12px"}
			z-index={"4"}
			border-radius={"4px"}
			padding={"5px 12px 4px"}
			background-color={"--dark"}
			opacity={"0.6"}
			hover-opacity={"1"}
			color={"--light"}
			cursor={"pointer"}
			transition={"--opacityOut"}
			quarkly-title={"Badge"}
			text-decoration-line={"initial"}
			href={"https://quarkly.io/"}
			target={"_blank"}
		>
			Made on Quarkly
		</Link>
	</Theme>;
});