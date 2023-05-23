import { useForm, SubmitHandler } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';

type MyFormData = {
	firstName: string;
	lastName: string;
	category: string;
	testText: string;
};

export default function App() {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<MyFormData>();
	const onSubmit: SubmitHandler<MyFormData> = (data) => {
		alert('submit');
		console.log(data);
	};
	return (
		<form onSubmit={handleSubmit(onSubmit)}>
			<input
				{...register('firstName', { required: true })}
				placeholder='名前'
			/>
			{errors.firstName && <div>名前を入力してください</div>}
			<input
				{...register('lastName', { required: true })}
				placeholder='名字'
			/>
			{errors.lastName && <div>名字を入力してください</div>}
			<select {...register('category', { required: true })}>
				<option value=''>選択...</option>
				<option value='A'>カテゴリA</option>
				<option value='B'>カテゴリB</option>
			</select>
			{errors.category && <div>カテゴリを選択してください</div>}
			<input
				{...register('testText', {
					required: true,
					maxLength: 10,
					pattern: {
						value: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
						message: 'メールアドレスの形式が不正です',
					},
					validate: {
						lessThanTen: (value) =>
							parseInt(value, 10) < 10 ||
							'10文字以内で入力して下さい',
					},
				})}
			/>
			<ErrorMessage errors={errors} name='testText' />

			<input type='submit' />
		</form>
	);
}
