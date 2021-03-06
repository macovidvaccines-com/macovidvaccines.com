import { hasSignUpLink } from "../SignUpLink";
import { makeStyles } from "@material-ui/core";
import Checkbox from "@material-ui/core/Checkbox";
import FormControl from "@material-ui/core/FormControl";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import { useTranslation } from "react-i18next";

const useStyles = makeStyles((theme) => ({
    tightCheckbox: {
        "padding-right": theme.spacing(0.5),
    },
}));

export default function AvailabilityFilter(props) {
    const { t } = useTranslation("main");
    const classes = useStyles();

    const handleChange = (e) => {
        return props.onChange(!!e.target.checked);
    };

    return (
        <FormControl component="fieldset" className={props.className}>
            <FormGroup>
                <FormControlLabel
                    style={{ display: "table" }}
                    control={
                        <div style={{ display: "table-cell" }}>
                            <Checkbox
                                checked={props.onlyShowAvailable}
                                onChange={handleChange}
                                name="onlyShowAvailable"
                                inputProps={{
                                    "data-testid": "availability-checkbox",
                                }}
                                classes={{
                                    root: classes.tightCheckbox,
                                }}
                            />
                        </div>
                    }
                    label={t("filter.only_show_available")}
                />
            </FormGroup>
        </FormControl>
    );
}

export function isAvailable(item) {
    return hasSignUpLink(item);
}
