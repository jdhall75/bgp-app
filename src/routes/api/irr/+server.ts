import { error } from '@sveltejs/kit';
import type { RequestHandler } from './$types';

export const GET: RequestHandler = ({ url }) => {
    const mnt_by = String(url.searchParams.get('mnt-by'));

    return new Response(String(mnt_by));
};