
const Header = ({name}) => (
	<h1>{name}</h1>
)

const Part = ({part}) => (
	<p>
		{part.title} {part.exercises}
	</p>
)

const Content = ({parts}) => parts.map(
	(part) => <Part key={part.id} part={part}/>
)

const Total = ({parts}) => (
	<p>Number of exercises {
		parts.reduce((acc, part) => acc + part.exercises, 0)
	}</p>
)

const App = () => {
	const course = {
		name: 'Half Stack application development',
		parts: [
			{
				id: 1,
				title: 'Fundamentals of React',
				exercises: 10
			},
			{
				id: 2,
				title: 'Using props to pass data',
				exercises: 7
			},
			{
				id: 3,
				title: 'State of a component',
				exercises: 14
			}
		]
	} 
	
	return (
		<div>
			<Header course={course.name}/>
			<Content parts={course.parts}/>
			<Total parts={course.parts}/>
		</div>
	)
}

export default App
