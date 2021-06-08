import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useForm } from "react-hook-form";
import InputFormField from "Components/InputField/InputField";
import React from "react";
import "./style/SearchForm.scss";

function SearchForm({ onChange = null }) {
	const form = useForm({
		defaultValues: {
			searchValue: "",
		},
	});

	const handleChange = async (values) => {
		if (onChange) {
			await onChange(values);
		}
	};
	return (
		<div className="searchForm">
			<div className="searchForm__icon">
				<FontAwesomeIcon icon={faSearch} />
			</div>
			<form
				onChange={form.handleSubmit(handleChange)}
				style={{ width: "100%" }}
			>
				<div className="searchForm__input">
					<InputFormField name="searchValue" form={form} />
				</div>
			</form>
		</div>
	);
}

export default SearchForm;
