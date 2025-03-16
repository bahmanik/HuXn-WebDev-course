FC: A typed function component that returns a React element.
for exaple FC<Prop> returns a function type with Prob argument

ReactNode: Anything that React can render (strings, elements, arrays, etc.).
for example children inside of a html element

HTML types: you can get diffrent html types by `html${name}Element`
htmlInputElement: A TypeScript type representing an HTML <input> element with its associated properties and methods.

event types: you can get diffrent event types by `${name}Event`
ChangeEvent: A React event type for handling input changes.

formEvent: A TypeScript type for form-related events like submit or reset in React.
const handleSubmit = (e: FormEvent<HTMLFormElement>) => e.preventDefault()

Example:
const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
  console.log(event.target.value);
};

useState<type>: you can give type to state like  this.
