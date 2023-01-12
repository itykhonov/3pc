import { createUseStyles } from 'react-jss';

export const useStyles = createUseStyles(() => {
  return {
    container: {
      height: '100vh',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      paddingBottom: 20
    },
    header: {
      padding: [16, 27],
      '& h1': {
        textAlign: 'center',
        marginBottom: 10
      }
    },
    main: {
      padding: [0, 27],
      display: 'flex',
      position: 'relative',
      flex: 1,
      justifyContent: 'space-between'
    },
    column: {
      width: '48%',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      '& .column-holder': {
        border: '1px solid #000',
        borderRadius: 20,
        padding: 20,
        display: 'flex',
        flex: 1,
        flexDirection: 'column'
      }
    },
    searchInputHolder: {
      display: 'flex',
      justifyContent: 'center',
      '& input': {
        outline: 'none',
        fontSize: 14,
        lineHeight: '20px',
        height: 40,
        width: '50%',
        color: '#000',
        marginBottom: 20,
        background: '#fff',
        border: '1.5px solid #000',
        padding: 10,
        overflow: 'hidden'
      }
    },
    searchResultsContainer: {
      position: 'relative'
    },
    searchResultsHolder: {
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flex: 1
    },
    searchItem: {
      fontSize: 20,
      lineHeight: '26px',
      marginBottom: 14,
      '& a': {
        color: '#000',
        '&.active': {
          fontWeight: 'bold',
          textDecoration: 'none'
        }
      }
    },
    paginationHolder: {
      padding: 13,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#000',
      '&.loading': {
        opacity: '0.5',
        pointerEvents: 'none',
        cursor: 'default'
      },
      '& .pagination': {
        display: 'flex',
        '& li': {
          marginRight: 14,
          width: 34,
          height: 34,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#fff',
          cursor: 'pointer',
          '&.disabled': {
            pointerEvents: 'none',
            opacity: 0.7
          },
          '&.active': {
            pointerEvents: 'none',
            background: '#000',
            color: '#fff'
          },
          '&:hover': {
            background: '#000',
            color: '#fff'
          },
          '& a': {
            flex: 1,
            textAlign: 'center',
            padding: [10, 2],
            '&:hover': {
              textDecoration: 'none'
            }
          }
        }
      }
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
    }
  };
});
