import { FormControl, MenuItem, Select } from "@mui/material"

export const YearSelector = ({year, years, handleChange} :{year: string, years: string[], handleChange: any}) => {
    return (
        <FormControl variant="standard">
            <Select
            labelId="article-year-label"
            id="article-year-label"
            value={year}
            label="Year"
            onChange={handleChange}
            >
                <MenuItem key="all" value="all">all</MenuItem>
                {years.map((year: string) => {return (<MenuItem key={year} value={year}>{year}</MenuItem>)})}
            </Select>
        </FormControl>
    )
}