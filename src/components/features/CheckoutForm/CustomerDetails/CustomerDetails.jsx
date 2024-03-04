import PropTypes from "prop-types";
import { CustomerInfoFields, Input } from "./CustomerDetails.styled.jsx";

export default function CustomerDetails({ register, errors }) {
    return (
        <CustomerInfoFields>
            <Input
                type="text"
                label="Name"
                {...register("name")}
                error={Boolean(errors?.name?.message)}
                helperText={errors?.name?.message}
                variant="filled"
            />
            <Input
                type="email"
                label="Email"
                {...register("email")}
                error={Boolean(errors?.email?.message)}
                helperText={errors?.email?.message}
                variant="filled"
            />
            <Input
                type="tel"
                label="Phone"
                {...register("phone")}
                error={Boolean(errors?.phone?.message)}
                helperText={errors?.phone?.message}
                variant="filled"
            />
            <Input
                type="text"
                label="Address"
                {...register("address")}
                error={Boolean(errors?.address?.message)}
                helperText={errors?.address?.message}
                variant="filled"
            />
        </CustomerInfoFields>
    );
}

CustomerDetails.propTypes = {
    register: PropTypes.func.isRequired,
    errors: PropTypes.object.isRequired,
};

// errorMessage={errors?.phone?.message ?? ''}
