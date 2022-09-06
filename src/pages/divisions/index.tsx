import React, { Fragment, useState } from 'react'
import { CountryProvider } from 'src/contexts/CountryContext'
import CountryDDL from 'src/views/countries/CountryDDL'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import DivisionsList from 'src/views/divisions/DivisionsList'

const index = () => {
  const [countryID,setCountryID]=useState(0);
  function handleSelectionUpdate(data: any) {
    console.log(data);
    setCountryID(data);
  }

return (
    <Fragment>
      <CountryProvider>
        <CountryDDL onSelectionUpdate={handleSelectionUpdate} />
        <Grid item xs={12}>
          <Card>
            <DivisionsList countryID={countryID} />
          </Card>
        </Grid>
      </CountryProvider>
    </Fragment>
  )
}

export default index
