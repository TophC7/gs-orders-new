import type { LayoutLoad } from './$types';
import { supabase } from '$lib/supabaseClient';

export const load: LayoutLoad = async () => {
	const { data: products, error } = await supabase.from('product').select('*');

	return {
		products: products
	};
};
