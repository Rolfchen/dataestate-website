import { NextApiRequest, NextApiResponse } from 'next';
import { fetchEstates } from 'de-api';

export interface ListingFilters {
  size?: string;
}

const listings = async (req: NextApiRequest, res: NextApiResponse) => {
  const { size = '30' } = req.query as ListingFilters;
  const queryOptions = {
    limit: parseInt(size),
  };
  try {
    const response = await fetchEstates(queryOptions);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json(error);
  }
};

export default listings;
