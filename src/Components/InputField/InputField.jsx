import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { Controller } from "react-hook-form";
import "./style/InputField.scss";

function InputField(props) {
	const { form, name } = props;
	const [close, setClose] = useState(true);

	const handleShowCloseBtn = (value) => {
		value.target.value === "" ? setClose(true) : setClose(false);
	};

	const handleCloseBtn = () => {
		setClose(true);
	};
	return (
		<Controller
			name={name}
			control={form.control}
			render={({ field: { onChange, onBlur, value, name, ref } }) => (
				<>
					<input
						type="text"
						placeholder="Search"
						ref={ref}
						name={name}
						value={value}
						onChange={(value) => {
							onChange(value);
							handleShowCloseBtn(value);
						}}
						onBlur={onBlur}
					/>
					<div
						className="icon"
						style={{ visibility: `${close ? "hidden" : "visible"}` }}
					>
						<FontAwesomeIcon
							icon={faTimes}
							onClick={(value) => {
								value = "";
								onChange(value);
								handleCloseBtn();
							}}
						/>
					</div>
				</>
			)}
		/>
	);
}

export default InputField;
