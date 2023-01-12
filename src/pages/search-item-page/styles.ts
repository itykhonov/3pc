import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(() => {
  return {
    '& .column-holder': {
      border: '1px solid #000',
      borderRadius: 20,
      padding: 20,
      display: 'flex',
      flex: 1,
      flexDirection: 'column'
    },
    noResults: {
      padding: 20,
      fontSize: 20,
      lineHeight: '24px',
      textAlign: 'center'
    },
    loading: {
      padding: 20,
      fontSize: 20,
      lineHeight: '24px',
      textAlign: 'center'
    },
    sortHolder: {
      display: 'flex',
      justifyContent: 'right',
      marginBottom: 40,
      '& .filter-select': {
        width: '50%'
      }
    },
    itemsList: {
      fontSize: 20,
      lineHeight: '24px',
      '& li': {
        marginBottom: 20
      }
    }
  };
});
